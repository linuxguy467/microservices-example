import { ServiceBroker } from "moleculer";

const broker = new ServiceBroker();

broker.createService({
  name: 'email',
  actions: {
    async sendEmail(ctx) {
      const { recipient, subject, content } = ctx.params;
      // Simulated email sending logic
      console.log(`Sending email to ${recipient} with subject ${subject}`);
      console.log(`Email content: ${content}`);
      return `Email sent to ${recipient}`;
    }
  }
});

export default broker;
