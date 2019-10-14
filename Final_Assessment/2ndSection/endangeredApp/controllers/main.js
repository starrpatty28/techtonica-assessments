const getAnimalData = (req, res, db) => {
  db.select('*').from('animal')
    .then(items => {
      if(items.length){
        res.json(items)
      } else {
        res.json({dataExists: 'false'})
      }
    })
    .catch(err => res.status(400).json({dbError: 'db error'}))
}

const postAnimalData = (req, res, db) => {
  const { name, scientificname, estliving } = req.body
  const added = new Date()
  db('animal').insert({name, scientificname, estliving, added})
    .returning('*')
    .then(item => {
      res.json(item)
    })
    .catch(err => res.status(400).json({dbError: 'db error'}))
}

const putAnimalData = (req, res, db) => {
  const { id, name, scientificname, estliving } = req.body
  db('animal').where({id}).update({name, scientificname, estliving})
    .returning('*')
    .then(item => {
      res.json(item)
    })
    .catch(err => res.status(400).json({dbError: 'db error'}))
}

const deleteAnimalData = (req, res, db) => {
  const { id } = req.body
  db('animal').where({id}).del()
    .then(() => {
      res.json({delete: 'true'})
    })
    .catch(err => res.status(400).json({dbError: 'db error'}))
}
//*******************************************************************//

const getScientistInputData = (req, res, db) => {
  db.select('*').from('scientistinput')
    .then(items => {
      if(items.length){
        res.json(items)
      } else {
        res.json({dataExists: 'false'})
      }
    })
    .catch(err => res.status(400).json({dbError: 'db error'}))
}

const postScientistInputData = (req, res, db) => {
  const { scientistname, date, time, animalspecies, countrylocation, animalhealth } = req.body
  const added1 = new Date()
  db('scientistinput').insert({scientistname, date, time,animalspecies,  countrylocation, animalhealth, added1})
    .returning('*')
    .then(item => {
      res.json(item)
    })
    .catch(err => res.status(400).json({dbError: 'db error'}))
}

const putScientistInputData = (req, res, db) => {
  const { id, scientistname, date, time, animalspecies, countrylocation, animalhealth } = req.body
  db('scientistinput').where({id}).update({scientistname, date, time,animalspecies, countrylocation, animalhealth})
    .returning('*')
    .then(item => {
      res.json(item)
    })
    .catch(err => res.status(400).json({dbError: 'db error'}))
}

const deleteScientistInputData = (req, res, db) => {
  const { id } = req.body
  db('scientistinput').where({id}).del()
    .then(() => {
      res.json({delete: 'true'})
    })
    .catch(err => res.status(400).json({dbError: 'db error'}))
}

//*******************************************************************//

const getScientistTrackData = (req, res, db) => {
  db.select('*').from('scientisttrack')
    .then(items => {
      if(items.length){
        res.json(items)
      } else {
        res.json({dataExists: 'false'})
      }
    })
    .catch(err => res.status(400).json({dbError: 'db error'}))
}

const postScientistTrackData = (req, res, db) => {
  const { scientistname, animalid, animalnickname, animalspecies } = req.body
  const added2 = new Date()
  db('scientisttrack').insert({scientistname, animalid, animalnickname, animalspecies, added2})
    .returning('*')
    .then(item => {
      res.json(item)
    })
    .catch(err => res.status(400).json({dbError: 'db error'}))
}

const putScientistTrackData = (req, res, db) => {
  const { id, scientistname, date, time, animalspecies, countrylocation, animalhealth } = req.body
  db('scientisttrack').where({id}).update({scientistname, date, time,animalspecies, countrylocation, animalhealth})
    .returning('*')
    .then(item => {
      res.json(item)
    })
    .catch(err => res.status(400).json({dbError: 'db error'}))
}

const deleteScientistTrackData = (req, res, db) => {
  const { id } = req.body
  db('scientisttrack').where({id}).del()
    .then(() => {
      res.json({delete: 'true'})
    })
    .catch(err => res.status(400).json({dbError: 'db error'}))
}



module.exports = {
  getAnimalData,
  postAnimalData,
  putAnimalData,
  deleteAnimalData,
  getScientistInputData,
  postScientistInputData,
  putScientistInputData,
  deleteScientistInputData,
  getScientistTrackData,
  postScientistTrackData,
  putScientistTrackData,
  deleteScientistTrackData 
}


