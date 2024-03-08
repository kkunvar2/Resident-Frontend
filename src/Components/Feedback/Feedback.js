import React from 'react'

const Feedback = () => {
  return (
    <>
    <section>
	<div className="bg-gray-800 h-screen text-white py-20">
		<div className="container mx-auto flex flex-col md:flex-row my-6 md:my-32">
			<div className="flex flex-col w-full lg:w-1/3 p-8">
				<p className="ml-6 text-yellow-300 text-lg uppercase tracking-loose">REVIEW</p>
				<p className="text-3xl md:text-5xl my-4  md:leading-snug">Leave us a feedback!</p>
				<p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
					Please provide your valuable feedback and something ...
				</p>
			</div>
			<div className=" w-full px-4 justify-center flex flex-wrap lg:w-6/12 ">
				
					<div className="relative flex flex-col min-w-0 w-full mb-6 shadow-lg rounded-lg bg-white">
						<div className="flex-auto p-5 lg:p-10">
							<h4 className="text-2xl mb-4 text-black font-semibold">Have a suggestion?</h4>
								
                                {/*Feedback Form */}
                                <form >
									<div className="relative w-full mb-3">
										<label className="block uppercase text-gray-700 text-xs font-bold mb-2">Email</label>
                                        <input type="email" className="border-0 px-3 py-3 rounded text-sm shadow w-full bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400" placeholder=" " required />
                                    </div>
									<div className="relative w-full mb-3">
										<label className="block uppercase text-gray-700 text-xs font-bold mb-2">Message</label>
                                        <textarea maxlength="300" className="border-0 px-3 py-3 bg-gray-300 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full" ></textarea>
									</div>
									<div className="text-center mt-6">
										<button  className="bg-yellow-300 text-black text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded  hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" >Submit</button>
									</div>
							    </form>
						</div>
					</div>
				</div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Feedback