const formatDateTime = (value) => {
  if (!value) return "-";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "-";
  return d.toLocaleString();
};

const text = (value) => {
  const v = String(value || "").trim();
  return v || "-";
};

export default function EnquiryDetailsDrawer({ enquiry, open, onClose }) {
  if (!enquiry) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-full overflow-y-auto border-l border-white/15 bg-[#0f2e1a]/98 p-5 backdrop-blur-xl transition-transform duration-300 ease-out sm:w-[75%] sm:max-w-[75%] md:p-6 xl:p-8 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-5 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h2 className="text-xl font-semibold text-white xl:text-2xl">Enquiry details</h2>
            <p className="mt-1 text-sm text-white/85 xl:text-base">
              {text(enquiry?.service)} • {formatDateTime(enquiry?.createdAt)}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/15 xl:px-4 xl:py-2 xl:text-sm"
          >
            Close
          </button>
        </div>

        <div className="grid gap-3 rounded-2xl border border-white/15 bg-white/8 p-4 text-sm text-white/90 sm:grid-cols-2 xl:gap-4 xl:p-5 xl:text-base">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-white/70 xl:text-sm">
              Name
            </p>
            <p className="mt-1 font-medium text-white xl:text-lg">{text(enquiry?.name)}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-white/70 xl:text-sm">
              Phone
            </p>
            <p className="mt-1 font-medium text-white xl:text-lg">{text(enquiry?.phoneNumber)}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-white/70 xl:text-sm">
              Email
            </p>
            <p className="mt-1 font-medium text-white xl:text-lg">{text(enquiry?.email)}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-white/70 xl:text-sm">
              Gender / Age
            </p>
            <p className="mt-1 font-medium text-white xl:text-lg">
              {text(enquiry?.gender)} /{" "}
              {Number.isFinite(Number(enquiry?.age)) ? Number(enquiry.age) : "-"}
            </p>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-base font-semibold text-white xl:text-xl">Answers</h3>
          <div className="mt-3 space-y-3 xl:space-y-4">
            {(enquiry?.answers || []).map((a, idx) => (
              <div
                key={a?.questionId || `answer-${idx}`}
                className="rounded-2xl border border-white/15 bg-white/8 p-4 xl:p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-white/70 xl:text-sm">
                  Q{Number.isFinite(Number(a?.questionIndex)) ? Number(a.questionIndex) + 1 : idx + 1}
                </p>
                <p className="mt-1 text-sm font-semibold text-[#fde68a] xl:text-lg">
                  {text(a?.prompt)}
                </p>
                <div className="mt-2 flex flex-wrap gap-2 text-xs xl:text-sm">
                  <span className="rounded-full border border-[#5eead4]/35 bg-[#5eead4]/10 px-2.5 py-1 font-semibold text-[#a7f3d0] xl:px-3 xl:py-1.5">
                    {text(a?.value)}
                  </span>
                </div>
              </div>
            ))}

            {Array.isArray(enquiry?.answers) && enquiry.answers.length === 0 ? (
              <div className="rounded-2xl border border-white/15 bg-white/8 p-4 text-sm text-white/85 xl:p-5 xl:text-base">
                No answers found.
              </div>
            ) : null}
          </div>
        </div>
      </aside>
    </div>
  );
}

