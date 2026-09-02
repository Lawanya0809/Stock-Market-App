import countryList from 'react-select-country-list'
import { Controller } from 'react-hook-form'
import { Label } from '@/components/ui/label'


const CountrySelectField = ({ name, label, control, error, required }: CountrySelectProps) => {
  const options = countryList().getData();

  return (
    <div className='space-y-2'>
      <Label htmlFor={name} className='form-label'>{label}</Label>
      <Controller
        name={name}
        control={control}
        rules={{ required: required ? 'Country is required' : false }}
        render={({ field }) => (
          <select {...field} className='form-select bg-black text-white border border-gray-600 focus:ring-blue-500 focus:border-blue-500'>
            <option value="">Select your country</option>
            {options.map((option) => (
              <option key={option.value} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
        )}
      />
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  )
}

export default CountrySelectField
