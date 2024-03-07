const SectionTitle = ({ title }) => {
  const firstLetter = title.charAt(0);
  const restOfTitle = title.slice(1);
  return (
    <h2 className="flex text-4xl md:text-6xl font-boxpixies group text-center mb-16 py-2 px-3 md:py-3 md:px-5 border border-slate-400 shadow shadow-white">
      <span className="text-cyan-500 inline-block transition duration-300 ease-in-out group-hover:scale-110">
        {firstLetter}
      </span>
      {restOfTitle}
    </h2>
  );
};

export default SectionTitle;
