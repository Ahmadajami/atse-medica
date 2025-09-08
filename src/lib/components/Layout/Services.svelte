<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import { getLocale } from '$lib/paraglide/runtime';
	import Sparkles from '@lucide/svelte/icons/sparkles';

	const services = [
		{
			title: 'Dental Implants',
			image: 'https://mocha-cdn.com/01992458-6c51-7970-84a2-3148183d79e4/dental-implants.jpg',
			description: 'Permanent tooth replacement solutions with natural-looking results',
			features: ['Titanium implants', 'Natural appearance', 'Long-lasting solution']
		},
		{
			title: 'Aesthetic Dentistry',
			image: 'https://mocha-cdn.com/01992458-6c51-7970-84a2-3148183d79e4/aesthetic-dentistry.jpg',
			description: 'Professional teeth whitening and cosmetic treatments',
			features: ['Teeth whitening', 'Veneers', 'Smile makeover']
		},
		{
			title: 'Tooth Correction',
			image: 'https://mocha-cdn.com/01992458-6c51-7970-84a2-3148183d79e4/tooth-correction.jpg',
			description: 'Orthodontic treatments for perfect teeth alignment',
			features: ['Traditional braces', 'Clear aligners', 'Bite correction']
		},
		{
			title: 'Skin Care',
			image: 'https://mocha-cdn.com/01992458-6c51-7970-84a2-3148183d79e4/skin-care.jpg',
			description: 'Advanced dermatological treatments for healthy skin',
			features: ['Acne treatment', 'Anti-aging', 'Skin rejuvenation']
		}
	];

	const services_ar = [
		{
			title: 'زراعة الأسنان',
			image: 'https://mocha-cdn.com/01992458-6c51-7970-84a2-3148183d79e4/dental-implants.jpg',
			description: 'حلول دائمة لاستبدال الأسنان بنتائج طبيعية المظهر',
			features: ['زرعات التيتانيوم', 'مظهر طبيعي', 'حل طويل الأمد']
		},
		{
			title: 'تجميل الأسنان',
			image: 'https://mocha-cdn.com/01992458-6c51-7970-84a2-3148183d79e4/aesthetic-dentistry.jpg',
			description: 'تبييض الأسنان الاحترافي والعلاجات التجميلية',
			features: ['تبييض الأسنان', 'القشور الخزفية', 'ابتسامة هوليود']
		},
		{
			title: 'تقويم الأسنان',
			image: 'https://mocha-cdn.com/01992458-6c51-7970-84a2-3148183d79e4/tooth-correction.jpg',
			description: 'علاجات تقويم الأسنان لتصحيح إطباق الأسنان',
			features: ['التقويم التقليدي', 'التقويم الشفاف', 'تصحيح العضة']
		},
		{
			title: 'العناية بالبشرة',
			image: 'https://mocha-cdn.com/01992458-6c51-7970-84a2-3148183d79e4/skin-care.jpg',
			description: 'علاجات جلدية متقدمة للحصول على بشرة صحية',
			features: ['علاج حب الشباب', 'مكافحة الشيخوخة', 'تجديد البشرة']
		}
	];

	const servicesTagline =
		'اكتشف مجموعتنا الكاملة من خدمات طب الأسنان والجلدية، المصممة لتمنحك الثقة التي تأتي مع الصحة والجمال الأمثل.';
	const servicesTagline_en =
		'Discover our comprehensive range of dental and dermatology services, designed to give you the confidence that comes with optimal health and beauty.';
</script>

<section id="services" class="px-4 py-20 sm:px-6 lg:px-8">
  <div class="mx-auto max-w-7xl">
    <div class="mb-16 text-center">
      <h2 class="mb-4 text-4xl font-bold md:text-5xl rtl:hidden">
        {m.tiny_polite_vole_mop()} <span class="text-primary">{m.services()}</span>
      </h2>
      <h2 class="mb-4 text-4xl font-bold md:text-5xl ltr:hidden">
        خدماتنا <span class="text-primary">الشاملة</span>
      </h2>
      <div class="bg-primary-600 mx-auto mb-6 h-1 w-32 rounded-full"></div>
      <p class="mx-auto max-w-3xl text-xl text-gray-600">
        {getLocale() == 'ar' ? servicesTagline : servicesTagline_en}
      </p>
    </div>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
      {#each getLocale() == 'ar' ? services_ar : services as service, index (service.title)}
        <div
          tabindex="0"
          class="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl focus-within:-translate-y-2 focus-within:shadow-2xl"
        >
          <div class="relative h-80 overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-focus-within:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          </div>

          <div class="absolute inset-0 flex flex-col justify-end p-6 text-left text-white rtl:text-right">
            <div class="mb-3 flex items-center space-x-3 rtl:space-x-reverse">
              <Sparkles class="text-primary-400 h-6 w-6" />
              <h3 class="text-2xl font-bold">{service.title}</h3>
            </div>

            <p
              class="mb-4 leading-relaxed text-gray-200 opacity-0 transition-opacity delay-100 duration-500 group-hover:opacity-100 group-focus-within:opacity-100"
            >
              {service.description}
            </p>

            <ul
              class="space-y-2 opacity-0 transition-opacity delay-200 duration-500 group-hover:opacity-100 group-focus-within:opacity-100"
            >
              {#each service.features as feature}
                <li class="flex items-center space-x-2 text-sm text-gray-300 rtl:space-x-reverse">
                  <div class="bg-primary-400 h-1.5 w-1.5 flex-shrink-0 rounded-full"></div>
                  <span>{feature}</span>
                </li>
              {/each}
            </ul>
          </div>

          <div
            class="border-primary-500 absolute inset-0 rounded-2xl border-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
          ></div>
        </div>
      {/each}
    </div>
  </div>
</section>

