'use client';

import ContactList from '@/components/Contact/ContactList';
import { contactItems } from '@/data/contactItems';

export default function ContactPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p>Feel free to reach out via the following methods:</p>
      <ContactList items={contactItems} />
    </div>
  );
}
