import { FiSend } from 'react-icons/fi';
import Button from '../Button/Button';
import { CONTACT_INFO, CONTACT_SOCIALS, INPUT_CLASS } from '../../constants/contact';
import useContactForm from '../../hooks/useContactForm';


const ContactForm = () => {
  const { form, isLoading, isSuccess, isError, handleChange, handleSubmit } = useContactForm();

  const submitLabel = () => {
    if (isLoading) return '⏳ Envoi en cours...';
    if (isSuccess) return '✓ Message envoyé !';
    if (isError)   return '✗ Erreur — réessayez';
    return 'Envoyer le message';
  };

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden" id="contact">
      <div className="absolute top-0 -left-40 w-[500px] h-[500px] bg-teal-500/[0.06] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-violet-500/[0.06] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-400/25 bg-teal-400/[0.06] text-teal-400 text-[11px] font-medium tracking-widest uppercase mb-6">
            Me contacter
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
            Travaillons ensemble
          </h1>
          <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
            Disponible pour des opportunités CDI, freelance ou des collaborations. N'hésitez pas à me contacter.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          <div className="space-y-8">
            <div className="space-y-4">
              {CONTACT_INFO.map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 p-4 bg-white/[0.03] border border-white/[0.08] rounded-xl hover:border-teal-500/20 transition-colors duration-200">
                  <div className="w-9 h-9 rounded-lg bg-teal-400/[0.08] border border-teal-400/15 flex items-center justify-center text-teal-400 shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-600 uppercase tracking-widest mb-0.5">{label}</p>
                    {href
                      ? <a href={href} className="text-sm text-gray-300 hover:text-teal-400 transition-colors font-medium">{value}</a>
                      : <span className="text-sm text-gray-300 font-medium">{value}</span>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="text-[10px] text-gray-600 uppercase tracking-widest mb-3">Réseaux</p>
              <div className="flex gap-3">
                {CONTACT_SOCIALS.map(({ icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-gray-400 text-sm font-medium hover:text-teal-400 hover:border-teal-500/20 transition-all duration-200"
                  >
                    {icon} {label}
                  </a>
                ))}
              </div>
            </div>

            <div className="p-4 bg-teal-500/[0.04] border border-teal-500/15 rounded-xl">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                <span className="text-teal-400 text-xs font-semibold">Disponible</span>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">
                Ouvert aux opportunités CDI — Développeur Full Stack Spring Boot / React.
              </p>
            </div>
          </div>

          {/* Right: formulaire */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] text-gray-500 uppercase tracking-widest mb-2">Nom</label>
                <input name="name" value={form.name} onChange={handleChange} required placeholder="Votre nom" className={INPUT_CLASS} />
              </div>
              <div>
                <label className="block text-[10px] text-gray-500 uppercase tracking-widest mb-2">Email</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="votre@email.com" className={INPUT_CLASS} />
              </div>
            </div>

            <div>
              <label className="block text-[10px] text-gray-500 uppercase tracking-widest mb-2">Sujet</label>
              <input name="subject" value={form.subject} onChange={handleChange} placeholder="Proposition CDI, collaboration..." className={INPUT_CLASS} />
            </div>

            <div>
              <label className="block text-[10px] text-gray-500 uppercase tracking-widest mb-2">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} required rows={6} placeholder="Décrivez votre projet ou opportunité..." className={`${INPUT_CLASS} resize-none`} />
            </div>

            {isError && (
              <p className="text-red-400 text-xs">Une erreur s'est produite. Vérifiez votre connexion ou réessayez.</p>
            )}

            <Button
              variant="primary"
              size="md"
              type="submit"
              disabled={isLoading}
              icon={!isLoading && <FiSend size={14} />}
              className="w-full justify-center"
            >
              {submitLabel()}
            </Button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
