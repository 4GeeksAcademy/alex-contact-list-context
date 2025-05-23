const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getContacts: async () => {
			   const response = await fetch('https://playground.4geeks.com/contact/agendas/alex')
			   const data = await response.json()
			   setStore({...getStore(), contacts: data.contacts})
		   }, 
		   sendData: async (newContact) => {
			try {
				const response = await fetch('https://playground.4geeks.com/contact/agendas/alex/contacts', {
				method: 'POST', 
				headers: {
				'Content-Type': 'application/json', 
				},
				body: JSON.stringify(newContact)})
	
				if (!response.ok) {
					throw new Error('there was an error')
				}

				const data = await response.json()
				await getActions().getContacts()
				return data
				
			} catch (error) {
				console.error(error)
			}
		}, 
		deleteContact: async (id) => {
			try {
				const resp = await fetch(`https://playground.4geeks.com/contact/agendas/alex/contacts/${id.id}`, {
				method: 'DELETE', 
				headers: {
				'Content-Type': 'application/json', 
				}})

				if (resp.ok) {
					await getActions().getContacts()
				}
			} catch (error) {
				console.error(error)
			}
		}, 
		handleContactEdit: async (contact) => {
			await setStore({...getStore(), editContact: {status: true, contactToEdit: contact} })
		},
		updateContact: async (newData) => {
			const resp = await fetch(`https://playground.4geeks.com/contact/agendas/alex/contacts/${newData.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				id: newData.id,
				name: newData.name, 
				email: newData.email, 
				phone: newData.phone, 
				address: newData.address			
			})
			})
			
			await getActions().getContacts()
		}
	}}
};

export default getState;
