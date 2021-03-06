  import Ember from 'ember';

export default Ember.Controller.extend({


  isSaveDisabled: Ember.computed('header'  , 'nofvaccancy' , 'location' ,  function() {

    if( Ember.isEmpty(this.get('header')) ||
    Ember.isEmpty(this.get('nofvaccancy'))  ||
    Ember.isEmpty(this.get('location'))

  ){return 'disabled';}
  else{return '';}
  }),

  allActive:'active', // propety added to make tabs active
  addActive:'',

  actions:{



    createJob:function(){



      var controller = this;
      var job= controller.store.createRecord('job',{
        header: controller.get('header'),
        desc: controller.get('desc'),
        skills: controller.get('skills'),
        salary: controller.get('salary'),
        nofvaccancy: controller.get('nofvaccancy'),
        location: controller.get('location')


      });

      job.save().then(function(){

        controller.notifications.addNotification({
          message: 'Job Created !' ,
          type: 'success',
          autoClear: true
        });
        controller.set('header','');
        controller.set('desc','');
        controller.set('skills','');
        controller.set('salary','');
        controller.set('nofvaccancy','');
        controller.set('location','');

        controller.set('addActive','');
        controller.set('allActive','active');

      });

    }
  }
});
