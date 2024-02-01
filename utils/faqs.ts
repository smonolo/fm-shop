import { Faq } from '@/types/Faq'

export const filterFaqs = (faqs: Faq[], query?: string): Faq[] => {
  if (query) {
    return faqs.filter((faq) =>
      faq.question.toLowerCase().includes(query.toLowerCase())
    )
  }

  return faqs
}
