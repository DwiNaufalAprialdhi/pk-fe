import React, { useState } from 'react';
import Icon from '@/components/Icon/Icon';

type InputPasswordProps = {
      name: string;
      id: string;
      placeholder: string;
      required: boolean;
};

export default function InputPassword(props: InputPasswordProps) {
      const [showPassword, setShowPassword] = useState(false);

      const togglePasswordVisibility = () => {
            setShowPassword((prevState) => !prevState);
      };

      return (
            <div className="w-full relative">
                  <input
                        type={showPassword ? 'text' : 'password'} // Toggle input type
                        name={props.name}
                        id={props.id}
                        className="w-full py-[15px] pl-5 pr-10 bg-white rounded-[8px] font-normal lg:text-sm text-xs text-text-dark placeholder:text-text-secondary outline-none"
                        placeholder={props.placeholder}
                        required={props.required}
                  />
                  {/* Icon Show/Hide */}
                  <div
                        className="absolute top-1/2 right-5 transform -translate-y-1/2 cursor-pointer"
                        onClick={togglePasswordVisibility} // Handle click event
                  >
                        {showPassword ? (
                              <Icon.hide className="lg:w-6 w-4 h-auto object-cover text-slate-400" />
                        ) : (
                              <Icon.show className="lg:w-6 w-4 h-auto object-cover text-slate-400" />
                        )}
                  </div>
            </div>
      );
}
