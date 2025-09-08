<script>
	import MapPin from '@lucide/svelte/icons/map-pin';
	import Phone from '@lucide/svelte/icons/phone';
	import Clock from '@lucide/svelte/icons/clock';
	import Award from '@lucide/svelte/icons/award';
	import BrandName from './BrandName.svelte';
	import { getLocale } from '$lib/paraglide/runtime';

	const text = {
		title: 'ATSÈMEDICA',
		subtitle: 'Visit Our Location',
		description:
			'Located in the heart of Damascus, ATSÈ MEDICA provides world-class dental and dermatological services. Our state-of-the-art facility combines cutting-edge technology with compassionate care to deliver exceptional results.',
		doctorName: 'Dr. Mohammed Saeed Alajami',
		doctorTitle: 'Lead Specialist - Dental & Dermatology',
		doctorDescription:
			'Board-certified specialist with extensive experience in cosmetic dentistry and advanced dermatological treatments. Committed to providing personalized care and exceptional results.'
	};

	// New array for info cards
	const infoCards = [
		{
			icon: MapPin,
			title: 'Location',
			value: 'Damascus, Syria\nPremium Medical District'
		},
		{
			icon: Clock,
			title: 'Hours',
			value: 'Mon-Fri: 9:00 AM - 6:00 PM\nSat: 9:00 AM - 2:00 PM'
		},
		{
			icon: Phone,
			title: 'Contact',
			value: '+963 XXX XXX XXX\ninfo@atsemedica.com'
		},
		{
			icon: Award,
			title: 'Experience',
			value: '15+ Years of Excellence\n1000+ Happy Patients'
		}
	];

	const text_ar = {
		title: 'ATSÈMEDICA',
		subtitle: 'تفضلوا بزيارة موقعنا',
		description:
			'يقع مركز أتسيه ميديكا في قلب دمشق، ويقدم خدمات أسنان وجلدية عالمية المستوى. يجمع مرفقنا الحديث بين أحدث التقنيات والرعاية الرحيمة لتقديم نتائج استثنائية.',
		doctorName: 'الدكتور محمد سعيد العجمي',
		doctorTitle: 'أخصائي أول - طب الأسنان ',
		doctorDescription:
			'أخصائي معتمد من البورد ولديه خبرة واسعة في طب الأسنان التجميلي ملتزم بتقديم رعاية شخصية ونتائج استثنائية.'
	};

	// New array for info cards
	const infoCards_ar = [
		{
			icon: MapPin,
			title: 'الموقع',
			value: 'دمشق، سوريا\nمنطقة طبية راقية'
		},
		{
			icon: Clock,
			title: 'ساعات العمل',
			value: 'الإثنين - الجمعة: 9:00 صباحًا - 6:00 مساءً\nالسبت: 9:00 صباحًا - 2:00 مساءً'
		},
		{
			icon: Phone,
			title: 'للتواصل',
			value: '+963 XXX XXX XXX\ninfo@atsemedica.com'
		},
		{
			icon: Award,
			title: 'الخبرة',
			value: 'أكثر من 15 عامًا من التميز\nأكثر من 1000 مريض سعيد'
		}
	];
</script>

<div class="flex min-h-screen items-center justify-center p-4">
	<section id="about" class=" w-full max-w-7xl rounded-3xl px-4 py-10 shadow-xl sm:px-6 lg:px-8">
		<div class="mx-auto max-w-7xl">
			<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 rtl:lg:grid-flow-col-dense">
				<div class="space-y-8 rtl:text-right rtl:lg:col-start-2">
					<div>
						<h2 class="mb-4 text-4xl font-bold md:text-5xl">
							<BrandName defultclass="" />
						</h2>
						<h3 class="mb-6 text-2xl font-semibold md:text-3xl">
							{getLocale() == 'ar' ? text_ar.subtitle : text.subtitle}
						</h3>
						<p class="text-lg leading-relaxed">
							{getLocale() === 'ar' ? text_ar.description : text.description}
						</p>
					</div>

					<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
						{#each getLocale() === 'ar' ? infoCards_ar : infoCards as card, idx}
							{@const Icon = card.icon}
							<div
								class="rounded-xl bg-secondary p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl"
							>
								<div class="mb-3 flex items-center space-x-3">
									<div class="rounded-lg bg-primary p-2">
										<Icon class="text-primary-600 h-5 w-5 " />
									</div>
									<h4 class="font-semibold">{card.title}</h4>
								</div>
								<p class="text-sm whitespace-pre-line" dir={idx === 2 ? 'ltr' : 'auto'}>
									{card.value}
								</p>
							</div>
						{/each}
					</div>

					<div class="rounded-xl bg-primary p-6 text-white">
						<h4 class="mb-2 text-xl font-semibold">
							{getLocale() === 'ar' ? text_ar.doctorName : text.doctorName}
						</h4>
						<p class="mb-3">{getLocale() === 'ar' ? text_ar.doctorTitle : text.doctorTitle}</p>
						<p class=" text-sm">
							{getLocale() === 'ar' ? text_ar.doctorDescription : text.doctorDescription}
						</p>
					</div>
				</div>

				<div class="h-96 overflow-hidden rounded-2xl shadow-2xl lg:h-[600px] rtl:lg:col-start-1">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207.92255864395608!2d36.28289644994379!3d33.50759638488797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e176067da0d5%3A0xb3d69b5730908124!2sAtef%20Ajami%20Sons%20Company.AASCO!5e0!3m2!1sen!2s!4v1755534937816!5m2!1sen!2s"
						width="100%"
						height="100%"
						style="border: 0;"
						allowfullscreen
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
						title="ATSÈ MEDICA Location"
						class="h-full w-full"
					></iframe>
				</div>
			</div>
		</div>
	</section>
</div>
