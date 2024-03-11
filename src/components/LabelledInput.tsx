interface LabelledInputType {
	label: string;
	placeholder: string;
	type?: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function LabelledInput({
	label,
	placeholder,
	onChange,
	type,
}: LabelledInputType) {
	return (
		<div className="my-2">
			<label className="block mb-2 text-sm font-semibold text-slate-600 ">
				{label}
			</label>
			<input
				type={type || 'text'}
				className="bg-gray-50 border border-gray-300   text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
				placeholder={placeholder}
				onChange={onChange}
				required
			/>
		</div>
	);
}
