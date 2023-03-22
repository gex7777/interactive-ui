import star from "./images/icon-star.svg";
const Button = ({ number }) => {
  return (
    <button className="bg-gray-700 rounded-full w-12 h-12 btn text-gray-500 focus:bg-gray-400 focus:text-gray-100 transition-all duration-150">
      {number}
    </button>
  );
};
function App() {
  return (
    <div className="wrapper rounded-xl p-10  max-w-md">
      <img src={star} alt="star" className="bg-gray-700 rounded-full p-3 " />
      <h2 className="text-gray-100 text-3xl mt-6 mb-3">How did we do?</h2>
      <p className="text-gray-400">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <ul className="flex flex-column justify-between mt-8 ">
        <li>
          <Button number={1} />
        </li>
        <li>
          <Button number={2} />
        </li>
        <li>
          <Button number={3} />
        </li>
        <li>
          <Button number={4} />
        </li>
        <li>
          <Button number={5} />
        </li>
      </ul>
      <div>
        <button className="btn-rating w-full pb-2 pt-3 mt-8 rounded-full uppercase tracking-widest text-white ">
          submit
        </button>
      </div>
    </div>
  );
}

export default App;
