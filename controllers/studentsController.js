const db = require('../config/database')
var exports = module.exports = {};

exports.index = function ( req, res) {
    // res.send('CRUD Operaton using Node JS/ Express JS/ MYSQL');
    let sql = "SELECT * FROM students";
    let query = db.query(sql, (err, rows) => {
        if(err) throw err;
        res.render('student_index', {
            title : 'Crude Operation using nodejs, express and mysql',
            breadcrumb : 'Student',
            students : rows
        });
    });
}

exports.add = function (req, res) {
    res.render('student_add', {
        title : 'Crude Operation using nodejs, express and mysql',
        breadcrumb : 'Student',
        breadcrumb_data : 'Add Student'
    });
};

exports.save = function (req, res) {
    let data = {
        name : req.body.name,
        email: req.body.email,
        phone_no: req.body.phone_no
    };
    let sql = "INSERT INTO students SET ?"
    let query = db.query(sql, data, (err, results) => {
        if(err) throw err;
        res.redirect('/');
    });
};


exports.edit = function (req, res) {
    const studentId = req.params.studentId;
    let sql = `SELECT * From students where id = ${studentId}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        res.render('student_edit', {
            title : 'Crude Operation using nodejs, express and mysql',
            breadcrumb : 'Student',
            breadcrumb_data : 'Edit Student',
            students : result[0]
        }); 
    });
};

exports.update = function (req, res) {
    const studentId = req.body.id;
    let sql = "UPDATE students SET name='"+req.body.name+"', email='"+req.body.email+"', phone_no='"+req.body.phone_no+"' where id =" +studentId;
    let query = db.query(sql,(err, results) => {
        if(err) throw err;
        res.redirect('/');
    });
};

exports.delete = function (req, res) {
    const studentId = req.params.studentId;
    let sql = `delete from students where id = ${studentId}`;
    let query = db.query(sql,(err, result) => {
        if(err) throw err;
        res.redirect('/');
    });
};
