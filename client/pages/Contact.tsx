import { FormEvent } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import SiteLayout from "@/components/site/SiteLayout";
import SectionHeading from "@/components/site/SectionHeading";
import ContactDetails from "@/components/site/ContactDetails";
import { useFadeUp } from "@/lib/reveal";

// NOTE: placeholder image (reused art asset) — swap for the real sketch.
const CONTACT_IMAGE = "/assets/contact-art.jpg";

const inputClass =
  "w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 font-heading text-base text-ink placeholder:text-neutral-400 outline-none transition-colors focus:border-ink";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-heading text-base font-semibold text-ink">
        {label}
      </label>
      {children}
    </div>
  );
}

export default function Contact() {
  const fadeUp = useFadeUp();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href = `mailto:rupanjali.kukal.rk@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <SiteLayout>
      <div className="flex flex-col gap-16 pt-16 lg:gap-[242px] lg:pt-20">
        {/* Heading + form */}
        <section className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          <div className="flex flex-col gap-6 lg:w-1/3">
            <SectionHeading
              title={
                <>
                  Start the
                  <br />
                  <span className="italic">Conversation</span>
                </>
              }
            />
            <motion.p
              className="font-heading font-[300] text-[12px] leading-[1.45] tracking-[1px] max-w-[24ch] text-ink"
              {...fadeUp(0.15)}
            >
              If you have questions or you need to contact me to discuss ideas
              or art.
            </motion.p>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            className="flex w-full max-w-xl flex-col gap-6 lg:flex-1"
            {...fadeUp(0.1)}
          >
            <Field label="Your Good Name">
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                className={inputClass}
              />
            </Field>
            <Field label="Your Email ID">
              <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                className={inputClass}
              />
            </Field>
            <Field label="Let's Discuss">
              <textarea
                name="message"
                required
                placeholder="Message"
                rows={10}
                className={`${inputClass} resize-none`}
              />
            </Field>
            <button
              type="submit"
              className="w-fit rounded-lg bg-ink px-6 py-3 font-heading text-base font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </motion.form>
        </section>

        {/* Image + contact details */}
        <section className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <motion.div className="overflow-hidden" {...fadeUp()}>
            <img
              src={CONTACT_IMAGE}
              alt="Rupanjali Kukal"
              className="aspect-square w-full object-cover lg:h-[423px] lg:w-[423px]"
            />
          </motion.div>
          <motion.div className="w-full max-w-xs" {...fadeUp(0.15)}>
            <ContactDetails />
          </motion.div>
        </section>
      </div>
    </SiteLayout>
  );
}
