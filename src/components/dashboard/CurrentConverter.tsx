import { type CurrentConverterProps } from "../../types";
const CurrentConverter: React.FC<CurrentConverterProps> = ({
  setIsModalOpen,
}) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white p-8 rounded-2xl w-full max-w-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Currency Converter</h3>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm text-slate-600">Amount</label>
            <input
              type="number"
              className="w-full p-3 border rounded-lg mt-1"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-sm text-slate-600">From</label>
              <select className="w-full p-3 border rounded-lg mt-1">
                <option>USD</option>
                <option>EUR</option>
                <option>RWF</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-slate-600">To</label>
              <select className="w-full p-3 border rounded-lg mt-1">
                <option>USD</option>
                <option>EUR</option>
                <option>RWF</option>
              </select>
            </div>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg">
            <p className="text-sm text-slate-600">Converted Amount:</p>
            <p className="text-2xl font-bold text-indigo-600">200000</p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full py-2 bg-slate-200 rounded-lg hover:bg-slate-300"
            >
              Close
            </button>
            <button className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              Convert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentConverter;
