// This is just some sample data
module.exports = {
  projects: {
    'fcp': {
      name: 'Fictional company project',
      hours: 20,
      slug: 'fcp',
      settings: {
        money: 'euro',
        markup: 0.20,
        tax: 0.047,
        discount: 0.10,
        hour_error: 10,
      },
      active: true,
      delivered: false,
      waiting: false,
      canceled: false,
    },

    'pffc': {
      name: 'Project for fictional company',
      hours: 10,
      slug: 'pffc',
      settings: {
        money: 'euro',
        markup: 0.20,
        tax: 0.047,
        discount: 0.10,
        hour_error: 10,
      },
      active: false,
      delivered: false,
      waiting: true,
      canceled: false,
    },

    'google': {
      name: 'Google project',
      hours: 30,
      slug: 'google-project',
      settings: {
        money: 'euro',
        markup: 0.20,
        tax: 0.047,
        discount: 0.10,
        hour_error: 10,
      },
      active: false,
      delivered: true,
      waiting: false,
      canceled: false,
    },

    'facebook': {
      name: 'Facebook project',
      hours: 25,
      slug: 'facebook-project',
      settings: {
        money: 'euro',
        markup: 0.20,
        tax: 0.047,
        discount: 0.10,
        hour_error: 10,
      },
      active: true,
      delivered: false,
      waiting: false,
      canceled: false,
    },
  },

  assets: {
    fixed: {
      '01': {
        name: 'Condomínio',
        amount: 1500,
      },
      '02': {
        name: 'Internet',
        amount: 44.95,
      },
      '03': {
        name: 'Faxina',
        amount: 100.00,
      },
    },

    variable: {
      '01': {
        name: 'Slicy',
        amount: 61.26,
      },
      '02': {
        name: 'Eon',
        amount: 57.00,
      },
      '03': {
        name: 'WP Migrate DB Pro',
        amount: 90.64,
      },
    },

    depreciation: {
      '01': {
        name: 'Slicy',
        amount: 61.26,
        lifespan: 3,
        bought: 1476464993098,
      },
      '02': {
        name: 'Eon',
        amount: 10.32,
        lifespan: 1,
        bought: 1446087995848,
      }
    },
  },

  settings: {
    currency: 'euro',
    markup: 0.20,
    tax: 0.047,
    discount: 0.10,
    hour_error: 10,
    salary: 2000,
  },

  profile: {
    name: 'Eduardo Azevedo Grigolo',
    email: 'eduardo.grigolo@gmail.com',
  },
};
