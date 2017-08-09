class Call(object):
    def __init__(self, unique_id, caller_name, caller_phone_number, time_of_call, reason_for_call):
        self.unique_id = unique_id
        self.caller_name = caller_name
        self.caller_phone_number = caller_phone_number
        self.time_of_call = time_of_call
        self.reason_for_call = reason_for_call
    def display_all(self):
        print "ID:", self.unique_id
        print "Name:", self.caller_name
        print "Caller #:", self.caller_phone_number
        print "Time:", self.time_of_call
        print "Reason:", self.reason_for_call
        return self

class CallCenter(object):
    def __init__(self, calls):
        self.calls = calls
        self.queue_size = len(self.calls)
    def add(self, call):
        self.calls.append(call)
        self.queue_size = len(self.calls)
        return self
    def remove(self):
        self.calls.pop(0)
        return self
    def info(self):
        print "Queue length:", self.queue_size
        for call in self.calls:
            print call.time_of_call, call.caller_phone_number, call.caller_name
    def remove_call_by_number(self, phone_number):
        for call in self.calls:
            if call.caller_phone_number == phone_number:
                self.calls.remove(call)
                return self
    def sort_calls_by_time(self):
        self.calls = sorted(self.calls, key=lambda call: call.time_of_call)
        return self

call1 = Call(1, "Kyle", "708-364-8299", "08:30", "first")
call2 = Call(2, "Rufus", "531-313-3131", "12:00", "lunch")
call3 = Call(3, "Kelly", "898-567-1234", "17:00", "dinner")
call4 = Call(4, "Bob", "777-777-7779", "10:30", "snack")
call5 = Call(5, "Eliza", "711-117-7117", "14:30", "snack")
center = CallCenter([call1, call2, call3])

center.add(call4)
center.add(call5)
center.info()
center.remove_call_by_number("777-777-7779")
center.info()
center.sort_calls_by_time()
center.info()