/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

const template = (context) => {
  return new Promise((resolve) => {
    resolve(`
      <h5 class="card-title">Katalyst Medical Symptom Checker for Clinical e-learning.</h5>
      <div class="card-text">
		<img src="logo2.jpg" alt="logo" style="width:200px;height:150px;">
        <p>This application was created as an example to help the medical students in learning to identify the disease based on the patient's history. This is only meant to assist a student's knowledge and NOT for any kind of clinical/diagnostic application.</p>
        <p>Visit our <a href="https://katalystmedical.herokuapp.com">VIRTUAL AI PATIENT</a> to interact with an Artificially Intelligent Virtual patient.</p>		
		<p>This webapp has questions which a user has to answer. It is powered by NLP(Natural Language Processing). It's AI core analyses the responses given by the user and comes to a most-probable diagnosis.</p>
        <p>Please visit our website at <a href="http://katalystmedical.in">Katalyst Medical</a> to know more about us.</p>
        <p>Please click <span class="badge badge-primary">Next</span> to move to the first question.</p>
        <p class="text-muted small"><i class="fa fa-info-circle"></i> This is the welcome screen. In a real life scenario you will probably want to display T&C here. In the background, the new <a target="_blank" href="https://developer.infermedica.com/docs/diagnosis#helping-us-improve-the-engine">Interview-Id</a> was created.</p>
      </div>
    `);
  });
};

export default template;
