import type { FAQ } from '@/types/faq'

export const filterFAQ = (faqs: FAQ[], query?: string): FAQ[] => {
  if (query) {
    return faqs.filter((faq) =>
      faq.question.toLowerCase().includes(query.toLowerCase())
    )
  }

  return faqs
}
