export function Badge(props: { message: string }) {
  return (
    <div className="fixed inset-x-0 top-0 z-[999] mx-auto grid w-full rounded-b-lg border-b border-neutral-200 bg-neutral-100 px-8">
      <span className="mx-auto py-2 text-center">{props.message}</span>
    </div>
  );
}
