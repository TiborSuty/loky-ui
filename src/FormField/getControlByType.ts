import {FunctionComponent} from 'react';

import {APIDatePicker} from '../APIDatePicker/APIDatePicker';
import {Checkbox} from '../Checkbox/Checkbox';
import {Checkboxes} from '../Checkboxes/Checkboxes';
import {Chips} from '../Chip/Chips';
import {Choice} from '../Choice/Choice';
import {CreatableChoice} from '../Choice/components/CreatableChoice';
import {CreatableMultiChoice} from '../Choice/components/CreatableMultiChoice';
import {CurrencyInput} from '../CurrencyInput/CurrencyInput';
import {DatePicker} from '../DatePicker/DatePicker';
import {DayMonthPicker} from '../DayMonthPicker/DayMonthPicker';
import {EmailInput} from '../EmailInput/EmailInput';
import {IntegerInput} from '../IntegerInput/IntegerInput';
import {MentionsInput} from '../MentionsInput/MentionsInput';
import {MultiChoice} from '../MultiChoice/MultiChoice';
import {NumberInput} from '../NumberInput/NumberInput';
import {NumberInputWithOptions} from '../NumberInputWithOptions/NumberInputWithOptions';
import {PasswordInput} from '../PasswordInput/PasswordInput';
import {PhoneInput} from '../PhoneInput/PhoneInput';
import {Radio} from '../Radio/Radio';
import {Slider} from '../Slider/Slider';
import {SuggestionInput} from '../SuggestionInput/SuggestionInput';
import {Switch} from '../Switch/Switch';
import {Textarea} from '../Textarea/Textarea';
import {TextInput} from '../TextInput/TextInput';
import {TimePicker} from '../TimePicker/TimePicker';
import {UploadImage} from '../UploadImage/UploadImage';
import {FormFieldType} from './types';

export function getControlByType(type: FormFieldType) {
  return controls[type];
}

export const controls: {[key in FormFieldType]: FunctionComponent<any>} = {
  text: TextInput,
  number: NumberInput,
  currency: CurrencyInput,
  integer: IntegerInput,
  password: PasswordInput,
  phone: PhoneInput,
  switch: Switch,
  radio: Radio,
  textarea: Textarea,
  checkbox: Checkbox,
  checkboxes: Checkboxes,
  chips: Chips,
  choice: Choice,
  creatableChoice: CreatableChoice,
  date: DatePicker,
  apiDate: APIDatePicker,
  time: TimePicker,
  email: EmailInput,
  uploadImage: UploadImage,
  slider: Slider,
  numberInputWithOptions: NumberInputWithOptions,
  dayMonth: DayMonthPicker,
  multiChoice: MultiChoice,
  creatableMultiChoice: CreatableMultiChoice,
  mentionsInput: MentionsInput,
  suggestionInput: SuggestionInput,
};
