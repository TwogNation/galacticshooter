var postMsg = ''

function postText(value){
	console.log('iFrame sender: ' + value) 
	parent.postMessage(value, "*")
}


const scriptsInEvents = {

		async GameEvsheet_Event23_Act4(runtime, localVars)
		{
			console.log(runtime.globalVars.TotalScore)
		},

		async GameEvsheet_Event160_Act3(runtime, localVars)
		{
			postText(runtime.globalVars.finalScore)
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

