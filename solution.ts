function multiplyValue(value:number, multiplier?:number): number{
    return value * (multiplier ?? 2);
};


function processInput(value: string|number|boolean): number|string{
    if (typeof value === "string"){
        return value.trim().toLowerCase();
    }
    if (typeof value === "number"){
        return value*10;
    }
    if (value === true){
        return "Active";
    }
    else{
        return "Inactive";
    }
};


function formatCoordinate(info: readonly [number,number,string]): string {
    return `Location: ${info[2]} (${info[0]}, ${info[1]})`;
}


function concatenateArrays<T>(...arrays: T[][]): T[] {
    const final_array: T[] = [];
    for (const elem of arrays){
        final_array.push(...elem);
    }
    return final_array;
}



interface Course {
    title:string;
    students:number;
    isPublished:boolean;
}

function getPopularCourses(courses:Course[],minStudents:number):Course[]{
    return courses.filter((course) => course.isPublished && course.students >= minStudents); 
}



function pluckValues<T, K extends keyof T>(info: T[], key: K): T[K][] {
    return info.map((element)=>element[key]);
}



class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number){
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails():string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}


class Manager extends Employee{
    private department: string;

    constructor(name:string, baseSalary:number, department:string){
        super(name,baseSalary);
        this.department = department;
    }

    getRoleInfo(): string{
        return `Manager of ${this.department}: ${this.name}`;
    }
}


function validateAgeAsync(age:number): Promise<string>{
    return new Promise((resolve, reject)=>{
        if (age>18 || age === 18){
            setTimeout(()=>{resolve("Access Granted");}, 1000);
        }
        else{
            reject(new Error("Access Denied: Must be 18 or older"));
        }   
    })
};