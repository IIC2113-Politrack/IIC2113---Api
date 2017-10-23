let fs = require('fs')
let mongoose = require('mongoose')
let Politician = require('../api/models/politicianModel')
let Proposal = require('../api/models/proposalModel')


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
        for (let i of [1, 2, 3]) {          
          index = genRandom(proposals.length)
          if (assigned.includes(index)) {
            continue
          } else {
            assigned.push(index)
          }
        }
        let relations = assigned.map(function(x) {
          return {
            proposal: proposals[x]._id,
            evidences: []
          }
        })
        relations.forEach(function(item) {
          console.log(item)
          Politician.update({"_id": politician._id}, {"$push": {"proposals": item }}, 
            function(err) {
              console.log(err)
          })
        })
      }
    })
  })
}