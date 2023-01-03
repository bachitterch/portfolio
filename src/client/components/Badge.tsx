export function Badge(props: { message: string }) {
  return (
    <div className="fixed inset-x-0 top-4 z-[999] mx-auto grid w-full">
      <span className="mx-auto rounded-lg border border-neutral-200 bg-neutral-100 py-2 px-4 text-center">
        {props.message}
      </span>
    </div>
  );
}
