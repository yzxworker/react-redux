class Employee{
	constructor(id,name,job){
		this.id=id;
		this.name=name;
		this.job=job;
	}

	getMesg(){
		return (
			this.id+'=>'+this.name+'=>'+this.job
			)
	}
}
export default Employee;