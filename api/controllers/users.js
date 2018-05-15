import db from "../../database/";

const users = {
  find: (req, res) => {
    db.all('SELECT * from users', (err, data) => {
      console.log('User: => ', data)
        if (err) res.send(`Operation failed :: ${err}`)
        res.send(data)
    })
  },

  create: (req, res) => {
    const {
      username,
      mail,
      age
    } = req.body;

    db.run('INSERT INTO users VALUES (?, ?, ?)', username, mail, age, (err) => {
      if (err) res.send('Erreur')
      res.send('User create')
    })
  }
}

export default users;