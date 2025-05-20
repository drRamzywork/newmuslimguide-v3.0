import useAppStore from "@/stores/store";

export default function Test() {
  const locale = useAppStore((state) => state.locale);
  const setLocale = useAppStore((state) => state.setLocale);
  const fetchMessages = useAppStore((state) => state.fetchMessages);

  return (
    <div>
      <button
        onClick={() => {
          setLocale("ar");
          fetchMessages("ar");
        }}
      >
        Switch to Arabic
      </button>
    </div>
  );
}
