interface Course {
    id: string;
    name: string;
    global: boolean;
    cityId?: string;
    branchId?: string;
}

export default Course;
