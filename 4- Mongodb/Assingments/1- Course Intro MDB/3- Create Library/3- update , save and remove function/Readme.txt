1) Update Document

> db.collection Name.update(<Query>, <update>)

Note --> Update Just on First Match
--> if Need Update on All Documents

> db.collection Name.update(<Query>, <update>, {multi: true})
<update> --> {$set: {field: Value}}

2) Update Document but will Delete Old and add New Doc you Write by same id

> db.collection Name.save({_id: , Field: newValue})


3) Empty Collection But Don't Delete From DB

> db.Collection Name.remove(<Query>)
