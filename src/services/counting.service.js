import { BehaviorSubject } from 'rxjs';

const subject = new BehaviorSubject({ number: 10 });

export const countingService = {
    sendMessage: message => {
        console.log(message)
        if (message === 'inc') {
            subject.next({ number: subject.value.number + 1 })
        }
        if (message === 'dec') {
            subject.next({ number: subject.value.number - 1 })
        }
    },
    clearMessages: () => subject.next(),
    getMessage: () => subject.asObservable()
};
