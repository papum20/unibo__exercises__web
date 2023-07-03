interface A {
	name?: string;
	pass?: string;
}

interface B extends A {
	name?: number
}


let ob:A = {
	name: "pippo",
	pass:"jq",
}

console.log(ob)

let ob2:A = {
	name: "3"
}



console.log({...ob2,...ob})