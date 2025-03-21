بيُستخدم في معالجة كميات كبيرة من البيانات بطريقة موزعة وفعّالة

هو أداة بتساعدك تعمل عمليات تحليلية معقدة على البيانات (زي التجميع أو الإحصاءات)

Output Collection

db.CollName.mapReduce(
	function() {emit (this.cust_id, this.amount)},  --> map
	function{key, values} {return Array.sum(values)}, --> reduce
	{	
		query: {status: "A"}, ---> query
		out: "order_totals"  ---> output
	}
)