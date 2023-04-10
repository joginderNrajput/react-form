import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    streetAddress: "",
    state: "",
    city: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("finally printing the value of Form Data");
    console.log(formData);
  }
  return (
    <div className="w-full max-w-xl mx-auto">
      <label
        htmlFor="my-form"
        className="text-center mt-3 text-2xl font-bold mb-4 block"
      >
        Enter your information
      </label>

      <form
        id="my-form"
        onSubmit={submitHandler}
        className="bg-purple-50 shadow-2xl rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4 md:flex md:justify-between">
          <div className="md:w-1/2 mr-2">
            <label
              htmlFor="firstName"
              className="block text-gray-700 font-bold mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Joginder"
              value={formData.firstName}
              onChange={changeHandler}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="md:w-1/2 ml-2">
            <label
              htmlFor="lastName"
              className="block text-gray-700 font-bold mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Singh"
              onChange={changeHandler}
              value={formData.lastName}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="jogindesinghudh2002@abc.com"
            name="email"
            onChange={changeHandler}
            value={formData.email}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="country"
            className="block text-gray-700 font-bold mb-2"
          >
            Country
          </label>
          <select
            id="country"
            name="country"
            onChange={changeHandler}
            value={formData.country}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">India</option>
            <option value="">Australio</option>
            <option value="">Canada</option>
            <option value="">Russia</option>
            <option value="">China</option>
            <option value="">Nepal</option>
            <option value="">USA</option>
            <option value="">Brazil</option>
            <option value="">Saudi Arabia</option>
            <option value="">UAE</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="streetAddress"
            className="block text-gray-700 font-bold mb-2"
          >
            Street Address
          </label>
          <input
            type="text"
            name="streetAddress"
            placeholder="11A-C"
            value={formData.streetAddress}
            id="streetAddress"
            onChange={changeHandler}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

    

        <div className="mb-4">
          <label htmlFor="city" className="block text-gray-700 font-bold mb-2">
            City
          </label>

          <input
            type="text"
            name="city"
            placeholder="Jammu"
            value={formData.city}
            id="city"
            onChange={changeHandler}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

   

        <div className="mb-4">
          <label htmlFor="state" className="block text-gray-700 font-bold mb-2"/>
            State

          <input
            type="text"
            name="state"
            placeholder="Jammu & Kashmir"
            value={formData.state}
            id="state"
            onChange={changeHandler}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="postalCode"
            className="block text-gray-700 font-bold mb-2 "
          >
            POSTAL Address
          </label>

          <input
            type="text"
            name="postalCode"
            placeholder="182125"
            value={formData.postalCode}
            id="postalCode"
            onChange={changeHandler}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <fieldset className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <legend className="text-lg font-medium mb-2">By Email</legend>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="comments"
                name="comments"
                checked={formData.comments}
                onChange={changeHandler}
                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              />
              <label for="comments" className="text-sm font-medium text-gray-700">
                Comments
              </label>
              <p className="text-sm text-gray-500">
                Get notified when someones posts a comment on a posting.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="candidates"
                name="candidates"
                checked={formData.candidates}
                onChange={changeHandler}
                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              />
              <label for="candidates" className="text-sm font-medium text-gray-700">
                Candidates
              </label>
              <p className="text-sm text-gray-500">
                Get notified when a candidate applies for a job.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="offers"
                name="offers"
                checked={formData.offers}
                onChange={changeHandler}
                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              />
              <label for="offers" className="text-sm font-medium text-gray-700">
                Offers
              </label>
              <p className="text-sm text-gray-500">
                Get notified when a candidate accepts or rejects an offer.
              </p>
            </div>
          </fieldset>
        </div>

        <div className="mb-4">
          <fieldset className="border border-gray-300 rounded-lg p-4">
            <legend className="font-bold text-lg mb-2">
              Push Notification
            </legend>
            <p className="mb-4">
              These are delivered via SMS to your mobile phone.
            </p>

            <div className="flex items-center mb-2">
              <input
                type="radio"
                id="pushEveryThing"
                name="pushNotifications"
                value="Everything"
                onChange={changeHandler}
                className="mr-2"
              />
              <label htmlFor="pushEverything" className="mr-4">
                Everything
              </label>

              <input
                type="radio"
                id="pushEmail"
                name="pushNotifications"
                value="Same as Email"
                onChange={changeHandler}
                className="mr-2"
              />
              <label htmlFor="pushEmail" className="mr-4">
                Same As Email
              </label>

              <input
                type="radio"
                id="pushNoting"
                name="pushNotifications"
                value="Not pushing Notifications"
                onChange={changeHandler}
                className="mr-2"
              />
              <label htmlFor="pushNoting">Don't Push Anything</label>
            </div>
          </fieldset>
        </div>
        <div className="mb-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold  mt-5 py-2 px-4 rounded-md transition-colors duration-300">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
