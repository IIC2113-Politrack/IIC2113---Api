let fs = require('fs')
let mongoose = require('mongoose')
let Politician = require('../api/models/politicianModel')
let Proposal = require('../api/models/proposalModel')
let Commitment = require('../api/models/commitmentModel')

exports.loadPoliticians = async function () {
  let politicians = JSON.parse(fs.readFileSync(__dirname + '/politicians.json', 'utf-8'))
  console.log("LOADING POLITICIANS")
  try {
    await Politician.insertMany(politicians)
    console.log('Successfully added Politicians doc to DB')
  } catch (e) {
    console.log(e)
  }
}

exports.loadProposals = async function (limit) {
  let proposals = JSON.parse(fs.readFileSync(__dirname + '/proposals.json', 'utf-8'))
  console.log("LOADING PROPOSALS")
  try {
    await Proposal.insertMany(proposals.slice(0, limit))
    console.log(`Successfully added ${limit} Proposals doc to DB`)
  } catch (e) {
    console.log(e)
  }
}

function genRandom(limit) {
  return Math.floor(Math.random() * limit)
}

exports.assignProposalsToPoliticians = function () {
  Proposal.find({}, (err, proposals) => {
    Politician.find({}, (err, politicians) => {
      for (let politician of politicians) {
        let name = politician.firstname + " " + politician.lastname
        console.log("politician: " + name)
        let assigned = []
        let index = 0
        for (let i of [1,
            2,
            3
          ]) {
          index = genRandom(proposals.length)
          if (assigned.includes(index)) {
            continue
          } else {
            assigned.push(index)
          }
        }
        let relations = assigned.map(function (x) {
          return {
            proposal: proposals[x]._id,
            evidences: []
          }
        })
        relations.forEach(function (item) {
          console.log(item)
          Politician.update({
            "_id": politician._id
          }, {
            "$push": {
              "proposals": item
            }
          }, function (err) {
            console.log(err)
          })
        })
      }
    })
  })
}

exports.genProposals = function () {
  let proposalsRAW = JSON.parse(fs.readFileSync(__dirname + '/proposals.json', 'utf-8'))
  let proposals = proposalsRAW.reduce(function (map, obj) {
    map[obj.id] = obj;
    return map;
  }, {});
  let commitmentsRAW = JSON.parse(fs.readFileSync(__dirname + '/commitments.json', 'utf-8'))
  let commitments = commitmentsRAW.reduce(function (map, obj) {
    map[obj.id] = obj;
    return map;
  }, {});
  let proposalsToCreate = []
  Politician.find({}, (err, politicians) => {
    console.log(`starting gathering proposals `)
    politicians.forEach(politician => {
      let key = politician.id
      let politicianCommitments = politician.commitmentsFromVI.map(c => {
        let commId = c.split(/\//).slice(-2)[0]
        return commitments[commId]
      })
      politicianCommitments.forEach(c => {
        let propId = c.proposal.split(/\//).slice(-2)[0]
        if (!proposalsToCreate.includes(propId)) {
          proposalsToCreate.push(propId)
        }
      })
    })
    // create proposals
    proposalsToCreate.forEach(proposalId => {
      console.log(`starting creating new proposal ${proposalId}`)
      let proposalData = proposals[proposalId]
      let new_proposal = new Proposal(proposalData)
      new_proposal.save(function (err, proposal) {
        if (err) {
          console.log(error)
          return
        } else {
          console.log(`saved proposal ${proposal.id}`)
        }
      })
    })
  })
}

exports.genCommitments = function () {
  let commitmentsRAW = JSON.parse(fs.readFileSync(__dirname + '/commitments.json', 'utf-8'))
  let commitments = commitmentsRAW.reduce(function (map, obj) {
    map[obj.id] = obj;
    return map;
  }, {});
  Politician.find({}, (err, politicians) => {
    politicians.forEach(politician => {
      console.log(`starting editing politician ${politician.id}`)
      let key = politician.id
      let politicianCommitments = politician.commitmentsFromVI.map(c => {
        let commId = c.split(/\//).slice(-2)[0]
        return commitments[commId]
      })
      politicianCommitments.forEach(c => {
        let propId = c.proposal.split(/\//).slice(-2)[0]
        Proposal.findOne({
          id: propId
        }, (err, proposal) => {
          let commitmentInfo = {
            proposal: proposal._id,
            politician: politician._id,
            details: c.details,
            id: c.id
          }
          console.log(`starting creating commitment ${c.id}`)
          let new_commitment = new Commitment(commitmentInfo)
          new_commitment.save(function (err, commitment) {
            console.log("commitment saved")
          })
        })
      })
    })
  })
}

exports.relateCommitmentsToPoliticians = function () {
  Commitment.find({}, (err, commitments) => {
    for (let commitment of commitments) {
      console.log(`handling commitment ${commitment.id}`)
      Politician.findOne({
        _id: commitment.politician
      }, (err, politician) => {
        console.log(`linking commitment ${commitment.id} to politician ${politician.lastname}`)
        politician
          .commitments
          .push(commitment._id)
        politician.save(function (err, updatedPolitician) {
          console.log(`saving politician ${politician.lastname}`)
          if (err) {
            console.log(err)
          } else {
            console.log("politician updated")
          }
        })
      })
    }
  })
}