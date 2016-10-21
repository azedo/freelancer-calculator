// This is just some sample data
module.exports = {
  projects: {
    'fcp': {
      name: 'Fictional company project',
      hours: 30,
      slug: 'fcp',
      settings: {
        money: 'euro',
        markup: 20,
        tax: 4.7,
        discount: 10,
        hour_error: 10,
      },
      active: true,
      delivered: false,
      waiting: false,
      canceled: false,
    },

    'pffc': {
      name: 'Project for fictional company',
      hours: 30,
      slug: 'pffc',
      settings: {
        money: 'euro',
        markup: 20,
        tax: 4.7,
        discount: 10,
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
        markup: 20,
        tax: 4.7,
        discount: 10,
        hour_error: 10,
      },
      active: true,
      delivered: true,
      waiting: false,
      canceled: false,
    },

    'facebook': {
      name: 'Facebook project',
      hours: 30,
      slug: 'facebook-project',
      settings: {
        money: 'euro',
        markup: 20,
        tax: 4.7,
        discount: 10,
        hour_error: 10,
      },
      active: false,
      delivered: false,
      waiting: false,
      canceled: true,
    },
  },

  assets: {
    fixed: {
      '01': {
        name: 'Condomínio',
        amount: 15000,
      },
      '02': {
        name: 'Internet',
        amount: 4495,
      },
      '03': {
        name: 'Faxina',
        amount: 10000,
      },
    },

    variable: {
      '01': {
        name: 'Slicy',
        amount: 6126,
      },
      '02': {
        name: 'Eon',
        amount: 5700,
      },
      '03': {
        name: 'WP Migrate DB Pro',
        amount: 9064,
      },
    },

    depreciation: {
      '01': {
        name: 'Slicy',
        amount: 6126,
        lifespan: 3,
        bought: 1476464993098,
      }
    },
  },

  settings: {
    currency: 'euro',
    markup: 20,
    tax: 4.7,
    discount: 10,
    hour_error: 10,
  },

  profile: {
    name: 'Eduardo Azevedo Grigolo',
    email: 'eduardo.grigolo@gmail.com',
  },
};
