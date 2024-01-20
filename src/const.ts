// Common
export const DESKTOP_MIN_WIDTH = 1024;
export const DIGIT_SPACE = 3;
export const PHONE_LENGTH = 18;
export const RATING_SCALE_MULTIPLIER = 20;

export const KeyCode = {
  ESC: 27,
};

export const AppRoute = {
  MAIN: '',
  CONVERTER: '/converter',
};
// ---------------------------------

// Converter
export const FLOAT_COEFFICIENT = 100;
export const MAX_HISTORY_LENGTH = 10;
export const MAX_DAYS = 8;

export const ConverterFormCurrencies = ['RUB', 'USD', 'EUR', 'KZT', 'GBP', 'CNY'];
export const ConverterCanvasCurrencies = ['USD', 'EUR', 'KZT', 'GBP', 'CNY'];

export const FormFields = {
  INPUT: 'currencyInput',
  OUTPUT: 'currencyOutput',
};

export const ConverterInputParams = {
  maxValue: 1000000,

  input: {
    id: 'currency-input',
    name: 'currencyInput',
  },

  output: {
    id: 'currency-output',
    name: 'currencyOutput',
  }
};
// ---------------------------------

// Calculator
export const REQUIRED_INCOME = 45;
export const QUANTITY_MONTH = 12;

export const CalculatorSteps = {
  params: 'params',
  request: 'request',
};

export const CreditPurpose = {
  none: {
    name: 'Выберите цель кредита',
    type: '',
  },
  mortgage: {
    name: 'Ипотечное кредитование',
    type: 'mortgage',
  },
  car: {
    name: 'Автомобильное кредитование',
    type: 'car',
  },
};

export const InputFields = {
  cost: 'cost',
  initialFee: 'initialFee',
  term: 'term',
};

export const LabelTypes = {
  car: 'car',
};

export const OfferTypes = {
  refusal: 'refusal',
};

export const SubmitButtonTypes = {
  preorder: 'preorder',
  request: 'request',
};

export const InputIconsTypes = {
  minus: 'minus',
  plus: 'plus',
};

export const InputTypes = {
  email: 'email',
  fullName: 'fullName',
  initialFee: 'initialFee',
  phone: 'phone',
  show: 'show',
  term: 'term',
  userInfo: 'userInfo',
};

export const MortgageParams = {
  type: 'mortgage',
  minCost: 1200000,
  maxCost: 25000000,
  costStep: 100000,
  minInitialFee: 10,
  minTerm: 5,
  maxTerm: 30,
  minCreditAmount: 500000,
  maternalCapitalValue: 470000,
  percent: {
    defaultPercent: 9.4,
    specialPercent: 8.5,
    amountForSpecialPercent: 15,
  },
};

export const CarParams = {
  type: 'car',
  minCost: 500000,
  maxCost: 5000000,
  costStep: 50000,
  minInitialFee: 20,
  minTerm: 1,
  maxTerm: 5,
  minCreditAmount: 200000,
  additionalToCar: {
    casco: 'casco',
    lifeInsurance: 'lifeInsurance',
  },
  percent: {
    defaultPercent: 16,
    specialPercent: 15,
    amountForSpecialPercent: 2000000,
    oneAddition: 8.5,
    allAdditions: 3.5,
  },
};
// ---------------------------------

// Slider
export const MainSlidesNames = {
  credit: 'credit',
  promo: 'promo',
  offices: 'offices'
};

export const MainSliderParams = {
  type: 'main-slider',
  isCarousel: true,
  slides: [
    {
      name: MainSlidesNames.credit,
      title: 'Лига Банк',
      slogan: 'Кредиты на любой случай',
      linkHref: 'calculator',
      link: 'Рассчитать кредит',
    },

    {
      name: MainSlidesNames.promo,
      title: 'Лига Банк',
      slogan: 'Ваша уверенность в завтрашнем дне',
      linkHref: '',
      link: '',
    },

    {
      name: MainSlidesNames.offices,
      title: 'Лига Банк',
      slogan: 'Всегда рядом',
      linkHref: 'map',
      link: 'Найти отделение',
    },
  ]
};

export const ServicesSlidesNames = {
  deposit: 'deposit',
  credit: 'credit',
  insurance: 'insurance',
  online: 'online'
};

export const ServicesSliderParams = {
  type: 'services-slider',
  isCarousel: false,
  slides: [
    {
      name: ServicesSlidesNames.deposit,
      tabName: 'Вклады',
      slogan: 'Вклады Лига Банка – это выгодная инвестиция в свое будущее',
      features: [
        'Проценты по вкладам до 7%',
        'Разнообразные условия',
        'Возможность ежемесячной капитализации или вывод процентов на банковскую карту',
      ],
      text: {},
      link: 'Узнать подробнее',
    },

    {
      name: ServicesSlidesNames.credit,
      tabName: 'Кредиты',
      slogan: 'Лига Банк выдает кредиты под любые цели',
      features: ['Ипотечный кредит', 'Автокредит', 'Потребительский кредит'],
      text: {
        firstLine: 'Рассчитайте ежемесячный платеж',
        secondLine: 'и ставку по кредиту воспользовавшись нашим ',
        link: 'кредитным калькулятором',
      },
      link: '',
    },

    {
      name: ServicesSlidesNames.insurance,
      tabName: 'Страхование',
      slogan: 'Лига Страхование — застрахуем все что захотите',
      features: [
        'Автомобильное страхование',
        'Страхование жизни и здоровья',
        'Страхование недвижимости',
      ],
      text: {},
      link: 'Узнать подробнее',
    },

    {
      name: ServicesSlidesNames.online,
      tabName: 'Онлайн-сервисы',
      slogan: 'Лига Банк — это огромное количество онлайн-сервисов для вашего удобства',
      features: [
        'Мобильный банк, который всегда под рукой',
        'Приложение Лига-проездной позволит вам оплачивать билеты по всему миру',
      ],
      text: {},
      link: 'Узнать подробнее',
    },
  ]
};
// ---------------------------------

// ReviewsForm
export const StarIconWidth = 37;

export const RatingParams = [
  {
    value: 5,
    id: 'star-5',
    title: 'perfect'
  },
  {
    value: 4,
    id: 'star-4',
    title: 'good'
  },
  {
    value: 3,
    id: 'star-3',
    title: 'not bad'
  },
  {
    value: 2,
    id: 'star-2',
    title: 'badly'
  },
  {
    value: 1,
    id: 'star-1',
    title: 'terribly'
  }
];
// ---------------------------------

// Footer
export const ContactsTel = {
  mobile: 'mobile',
  main: 'main',
};

export const SocialLinks = {
  facebook: 'facebook',
  instagram: 'instagram',
  twitter: 'twitter',
  youtube: 'youtube',
};
// ---------------------------------
