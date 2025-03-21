1) Show All Documents inside Collection

> db.Collection Name.find()
OR
> db.Collection Name.find().pretty()

2) Add Condition on Find

> db.Collection Name.find({Field: Value})

3) Select Special Field

> db.Collection Name.find({Field: Value}, Projection)

Projection = {Field1: Value, Field2: Value}
0 --> To exclude the field
1 --> To include the field

4) Comparison Query Operation

Syntax:
> db.Collection Name.find({Field: {$gt: Value}}) -> Greater Than
  db.Collection Name.find({Field: {$gte: Value}}) -> Greater Than Equal
  db.Collection Name.find({Field: {$lt: Value}}) -> Less Than
  db.Collection Name.find({Field: {$lte: Value}}) -> Less Than Equal
  db.Collection Name.find({Field: {$ne: Value}}) -> Not Equal
  db.Collection Name.find({Field: {$in: [Value1, Value2, ...ValueN]}}) -> Match any value pecified in an array

5) Element Query Operators
Syntax: 
> db.Collection Name.find({Field: {$exists: <Boolean>}}) -> Matches Documents That have the Specified field

6) expressions Return Tru if All of are true

> db.Collection Name.find({$and: [{cond1}, {cond2}, ...]})

7) Expressions Return First True Expression

> db.Collection Name.find({$or: [{cond1}, {cond2}, ...]}) 

8) Show First Doc

> db.collection Name.find().limit(<Positive number>)

9) Show First Doc after skip number

> db.collection Name.find().skip(<Offset number>)

10) Sort Doc

> db.collection Name.find().sort({field: 1 asc or -1 desc})

11) Return Just First Match

>> db.collection Name.findOne({})

Note--> we Can't use Pretty, Limit, Skip, Sort With FindOne Function  







	