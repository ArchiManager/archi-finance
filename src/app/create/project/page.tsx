function CreateProjectPage() {
    return (
        <div>
            <h1 className="text-4xl text-primary text-center">Create Project</h1>
            <p className="text-center">Arics Finance create project page is there to help you create a new project.</p>

            <div className="flex justify-center">
                <div className="w-1/2">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="projectName" className="block text-sm font-medium text-gray-700">Project Name</label>
                            <input type="text" id="projectName" name="projectName" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700">Project Description</label>
                            <textarea id="projectDescription" name="projectDescription" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="projectType" className="block text-sm font-medium text-gray-700">Project Type</label>
                            <select id="projectType" name="projectType" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                <option>Web Development</option>
                                <option>Mobile Development</option>
                                <option>Desktop Development</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="projectDeadline" className="block text-sm font-medium text-gray-700">Project Deadline</label>
                            <input type="date" id="projectDeadline" name="projectDeadline" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="projectBudget" className="block text-sm font-medium text-gray-700">Project Budget</label>
                            <input type="number" id="projectBudget" name="projectBudget" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="projectFiles" className="block text-sm font-medium text-gray-700">Project Files</label>
                            <input type="file" id="projectFiles" name="projectFiles" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default CreateProjectPage;