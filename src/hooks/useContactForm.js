import { useState } from 'react';
import { CONTACT_FORM_INITIAL } from '../constants/contact';
import { sendContactEmail } from '../services/emailService';

const STATUS = { IDLE: 'idle', LOADING: 'loading', SUCCESS: 'success', ERROR: 'error' };

const useContactForm = () => {
  const [form, setForm]     = useState(CONTACT_FORM_INITIAL);
  const [status, setStatus] = useState(STATUS.IDLE);

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(STATUS.LOADING);

    try {
      await sendContactEmail(form);
      setStatus(STATUS.SUCCESS);
      setForm(CONTACT_FORM_INITIAL);
    } catch {
      setStatus(STATUS.ERROR);
    } finally {
      setTimeout(() => setStatus(STATUS.IDLE), 4000);
    }
  };

  return {
    form,
    status,
    isLoading: status === STATUS.LOADING,
    isSuccess: status === STATUS.SUCCESS,
    isError:   status === STATUS.ERROR,
    handleChange,
    handleSubmit,
  };
};

export default useContactForm;
