export function Badge(props: { message: string }) {
  return (
    <div className="absolute top-4 w-full grid mx-auto px-8">
      <span className="border border-neutral-200 px-4 py-2 rounded-lg text-center mx-auto">
        {props.message}
      </span>
    </div>
  );
}
