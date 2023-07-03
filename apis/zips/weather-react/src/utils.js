
/*
*	RECURSIVELY UNPACKS ARRAY AND OBJECTS, TO RETURN A SINGLE STRING
*/

export function arrayOrObj2str(container) {
   return typeof container === (typeof "") ? container
   		: typeof container === (typeof {}) ? Object.values(container).map((field) => arrayOrObj2str(field)).join(', ')
		: typeof container === (typeof []) ? container.map((field) => arrayOrObj2str(container)).join(', ')
		: container;
}

