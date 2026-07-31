export default function Pricing() {
  const pricing = [{
    title: "free",
    price: 0,
    whoFor: "For small clubs and teams just getting off spreadsheets.",
    youGet : ["one shared Ledger", , "upto 5 members", "7-day audit history", "upto 50 entries per-month"]


  }, {
    title: "team",
    price: 5,
    whoFor: "For meduim sized organizations that don't needs too many hands.",
    youGet : ["unlimited Ledger", "export to PDF or CSV", "upto 25 members", "365-day audit history", "unlimited entries per-month"]


  }, {
    title: "organization",
    price: 25,
    whoFor: "For large organizations with multiple departments and  need and full history.",
    youGet : ["unlimited members", "full audit history",]


  }]
  return (
    <div className="p-10 mt-50 border-t border-slate-600 pt-20">
      <p className="capitalize font-bold text-2xl">Priced for teams, not enterprises.
        <p className="capitalize font-bold text-sm w-80 mb-20 text-green-200">Simple, per-workspace pricing</p></p>
      <div className="flex gap-5 flex-wrap justify-center md:justify-start">
        {pricing.map((data, key) => {
          return (
          <div key={key} className="w-80 h-100 bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <p className="text-slate-400 uppercase">{data.title}</p>
            <div className="mt-5">
                <p className="text-2xl font-bold text-green-300">${data.price}<span className="text-sm text-green-200">/month</span></p>
                <p className="text-slate-400 capitalize text-sm">{data.whoFor}</p>
                <div className="mt-3 ml-4">
                  {data.youGet.map((val, key) => {
                    return <li key={key} className="text-slate-300 capitalize font-bold">{val}</li>
                  })}
              </div>

            </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
