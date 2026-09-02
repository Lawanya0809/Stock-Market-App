import { Label } from '@/components/ui/label'
import { Controller } from 'react-hook-form'

const SelectField = ({name,label,placeholder,options,control,error,required=false}:SelectFieldProps) => {
  return (
    <div className='space-y-2'>
      <Label htmlFor={name} className='form-label'>{label}</Label>
      <Controller
        name={name}
        control={control}
        rules={{ required: required ? `Please select ${label.toLowerCase()}` : false }}
        render={({ field }) => (
          <select {...field} className='form-select bg-black text-white border border-gray-600 focus:ring-blue-500 focus:border-blue-500'>
            <option value="">{placeholder}</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
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

export default SelectField
