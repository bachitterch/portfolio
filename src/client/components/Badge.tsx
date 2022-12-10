export function Badge(props: { message: string }) {
  return (
    <div className="absolute top-4 w-full flex justify-center">
      <p className="inline-block bg-white border-2 border-neutral-200/50 px-4 py-2 rounded-lg text-center">
        {props.message}
      </p>
    </div>
  );
}
