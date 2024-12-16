type DropdownProps = {
	options: { label: string; value: number }[];
	onChange: (value: number) => void;
  };
  
  const Dropdown = ({ options, onChange }: DropdownProps) => {
	return (
	  <select
		className="border p-2 rounded-md"
		onChange={(e) => onChange(Number(e.target.value))}
	  >
		<option value="">Select a Company</option>
		{options.map((option) => (
		  <option key={option.value} value={option.value}>
			{option.label}
		  </option>
		))}
	  </select>
	);
  };
  
  export default Dropdown;
  
