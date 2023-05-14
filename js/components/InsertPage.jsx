// js/components/MainPage.jsx
export default function InsertPage() {
	const insertRecord = async (e) => {
		e.preventDefault();

		const title = document.getElementById('title').value;
		const description = document.getElementById('description').value;
		const ingredient=document.getElementById('ingredient').value;
		const img = document.getElementById("image").value;
		const data = {
			titlu: title,
			descriere: description,
			ingrediente:ingredient,
			image: img
		};

		console.log(data);

		fetch("/api/record", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then( () => {
				console.log("A records has been uploaded")
				document.getElementById('title').value = '';
				document.getElementById('description').value = '';
				document.getElementById('ingredient').value='';
				document.getElementById("image").value = "";
			})
	}

	return (
		<section className={"bg-white"}>
			<div className={"container px-6 py-10 mx-auto"}>
				<h1 className={"w-[500px] mx-auto text-center text-6xl font-bold text-pink-600"}>Adauga reteta ta</h1>
				<p className={"w-[1000px] mx-auto text-center mt-4 text-3xl text-black-600"}>Poti adauga retetele tale preferate chiar acum!</p>

				<form>
					<div className="mb-6">
						<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nume reteta</label>
						<input type="text" id="title"
						       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						       placeholder="Numele retetei" required/>
					</div>
					<div className="mb-6">
						<label htmlFor="ingredient"
						       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ingrediente</label>
						<textarea id="ingredient"
						          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								  placeholder="Ingrediente"  
								  required/>
					</div>
					<div className="mb-6">
						<label htmlFor="description"
						       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mod de preparare</label>
						<textarea id="description"
						          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								  placeholder="Mod de preparare"
						          required/>
					</div>
					<div className="mb-6">
            <label
              htmlFor="image"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Adauga imaginea finala
            </label>
            <input
              type="text"
              id="image"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Url"
              required
            />
          </div>
					<button type="submit"
					        onClick={ insertRecord }
					        className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Adauga acum 
					</button>
				</form>

			</div>
		
		</section>
	)
}