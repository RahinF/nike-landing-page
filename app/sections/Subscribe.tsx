import Button from '../components/Button';

const Subscribe = () => {
  return (
    <div
      id="contact-us"
      className="max-container flex gap-20 lg:flex-row flex-col justify-between items-center"
    >
      <label htmlFor="subscribe">
        <h2 className="text-4xl font-palanquin font-bold lg:max-w-md">
          Sign Up for<span className="text-coral-red"> Updates </span>&
          Newsletter
        </h2>
      </label>

      <div className="border flex p-2.5 rounded-full lg:flex-1 w-full items-center">
        <input
          id="subscribe"
          type="text"
          placeholder="subscribe@nike.com"
          className="flex-1 px-4 text-slate-gray outline-none"
        />
        <div className="shrink-0">
          <Button label="Sign Up" />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
