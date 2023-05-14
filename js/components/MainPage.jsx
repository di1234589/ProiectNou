// js/components/MainPage.jsx
import {useEffect, useState} from "react";

export default function MainPage() {
	const [records, setRecords] = useState([]);

	useEffect(() => {
		try{
			fetch('/api/record', {
				method: 'GET',
			})
				.then(response => response.json())
				.then(json => setRecords(json.data));
		}
		catch(e){
			console.log(e);
		}
	}, []);

	const deleteRecord = async (e) => {
		e.preventDefault();

		console.log(e.target.id);
		const id = e.target.id;

		try{
			fetch(`/api/record?id=${id}`, {
				method: 'DELETE',
			})
				.then(response => response.json())
				.then(json => {
					setRecords(records.filter(record => record._id !== id));
				});
		}
		catch(e){
			console.log(e);
		}
	}

	console.log(records);

	return (
		<section className={"bg-white"}>
			<div className={"container px-6 py-10 mx-auto"}>
				<h1 className={"w-[500px] mx-auto text-center text-6xl font-bold text-pink-600"}>Aplicatia de retete</h1>
				<p className={"w-[1000px] mx-auto text-center mt-4 text-3xl text-black-600"}>Bine ati venit in lumea bucatariei!</p>
				<img src="a.jpg" alt="A cute cat"></img>
				<div className={"grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3"}>
					{
						records.map(record => (
							<div key={record._id}
								className={"max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow "}
							>
							<img src={record.imageUrl} alt={record.title} className={"mb-2 w-full rounded-lg"} />

								<h3 className={"mb-2 text-2xl font-bold text-red-500"}>{record.titlu}</h3>
								<p className={"font-normal "}>{record.ingrediente}</p>
								<p className={"font-normal "}>{record.descriere}</p>
								<p className={"font-normal text-violet-600"}>{record.pret}</p>
            <img
              class="h-auto max-w-full"
              src={record.image}
              alt="image description"
            ></img>
            <button
              type="button"
              onClick={deleteRecord}
              id={record._id}
              className="  mb-5 text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 "
            >
									Delete!
								</button>
							</div>
						))
					}
				</div>
			</div>
		</section>
	)
}